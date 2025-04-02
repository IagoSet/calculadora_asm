section .data
    msg1 db 'Digite um numero (dividendo): ', 0
    msg2 db 'Digite outro numero (divisor): ', 0
    msg3 db 'Escolha uma operacao (+, -, *, /): ', 0
    resultado_msg db 'Resultado: ', 0
    newline db 10, 0
    error_msg db 'Erro: divisao por zero', 0

section .bss
    num1 resb 10  ; buffer para o primeiro número (dividendo)
    num2 resb 10  ; buffer para o segundo número (divisor)
    op resb 2     ; buffer para a operação
    result resb 11; buffer para o resultado

section .text
    global _start

_start:
    ; Solicita o primeiro número (dividendo)
    mov rax, 1
    mov rdi, 1
    mov rsi, msg1
    mov rdx, 29
    syscall

    mov rax, 0
    mov rdi, 0
    mov rsi, num1
    mov rdx, 10
    syscall

    ; Solicita o segundo número (divisor)
    mov rax, 1
    mov rdi, 1
    mov rsi, newline
    mov rdx, 1
    syscall

    mov rax, 1
    mov rdi, 1
    mov rsi, msg2
    mov rdx, 32
    syscall

    mov rax, 0
    mov rdi, 0
    mov rsi, num2
    mov rdx, 10
    syscall

    ; Solicita a operação
    mov rax, 1
    mov rdi, 1
    mov rsi, newline
    mov rdx, 1
    syscall

    mov rax, 1
    mov rdi, 1
    mov rsi, msg3
    mov rdx, 34
    syscall

    mov rax, 0
    mov rdi, 0
    mov rsi, op
    mov rdx, 2
    syscall

    ; Converte os números para inteiros
    mov rsi, num1
    call str_to_int    ; converte o primeiro número (dividendo) para inteiro
    mov rax, rax       ; armazenamos dividendo em rax

    mov rsi, num2
    call str_to_int    ; converte o segundo número (divisor) para inteiro
    mov rbx, rax       ; armazenamos divisor em rbx

    ; Compara a operação
    movzx rcx, byte [op]
    cmp rcx, '+'
    je add_op
    cmp rcx, '-'
    je sub_op
    cmp rcx, '*'
    je mul_op
    cmp rcx, '/'
    je div_op
    jmp exit

add_op:
    add rax, rbx
    jmp print_result

sub_op:
    sub rax, rbx  ; primeiro número menos o segundo
    jmp print_result

mul_op:
    imul rax, rbx
    jmp print_result

div_op:
    mov rbx, [num2]
    cmp rbx, 0
    je div_error
    
    mov rax, [num1]
    cqo                 ; Estender o sinal de RAX para RDX:RAX (equivalente a cdq em 32-bits)
    idiv qword [num2]   ; RAX = RDX:RAX / operando
    mov [result], rax
    jmp resultado_msg


div_error:
    mov rax, 1
    mov rdi, 1
    mov rsi, error_msg
    mov rdx, 22
    syscall
    jmp exit

print_result:
    ; converte o resultado de volta para string
    call int_to_str

    ; exibe "Resultado: "
    mov rax, 1
    mov rdi, 1
    mov rsi, resultado_msg
    mov rdx, 11  ; tamanho da mensagem "Resultado: "
    syscall

    ; exibe o resultado calculado
    mov rax, 1
    mov rdi, 1
    mov rsi, result
    mov rdx, 11  ; tamanho máximo do buffer
    syscall

    ; exibe uma linha nova
    mov rax, 1
    mov rdi, 1
    mov rsi, newline
    mov rdx, 1
    syscall

exit:
    mov rax, 60
    xor rdi, rdi
    syscall

str_to_int:
    ; converte string para inteiro
    mov rax, 0        ; zera o acumulador
    mov rcx, 10       ; multiplicador é 10
.loop:
    movzx rdx, byte [rsi]
    cmp rdx, 10         ; verifica se é o fim da string (enter)
    je .done
    sub rdx, '0'        ; converte o caractere para número
    imul rax, rcx       ; multiplica o número por 10
    add rax, rdx        ; adiciona o dígito ao número
    inc rsi              ; avança para o próximo caractere
    jmp .loop
.done:
    ret

int_to_str:
    ; converte o número (armazenado em rax) para uma string
    mov rsi, result + 10  ; começa do final do buffer
    mov byte [rsi], 0     ; finaliza a string
    dec rsi
    mov rcx, 10
    test rax, rax
    jz .write_zero

.loop:
    xor rdx, rdx
    div rcx              ; divide rax por 10
    add dl, '0'          ; converte para caractere
    mov [rsi], dl        ; coloca o caractere na posição correta
    dec rsi
    test rax, rax
    jnz .loop

.write_zero:
    ; se o número for zero, coloca '0' na string
    mov byte [rsi], '0'
    ; ajusta o ponteiro para o início da string
    mov rdi, result
    mov rdx, 11          ; tamanho máximo do buffer
    sub rdx, rsi         ; calcula o tamanho da string
    mov rax, rdx
    lea rsi, [rsi + 1]   ; ajusta rsi para apontar para o início da string
    ret