section .data
    msg1 db 'Digite um numero: ',0
    msg2 db 'Digite outro numero: ',0
    msg3 db 'Escolha uma operacao (+, -, *, /): ',0
    resultado_msg db 'Resultado: ',0
    newline db 10, 0
    error_msg db 'Erro: divisao por zero',0

section .bss
    num1 resb 10
    num2 resb 10
    op resb 2
    result resb 11  ; Aumentado para suportar números negativos e o caractere nulo

section .text
    global _start

_start:
    ; Solicita o primeiro número
    mov rax, 1
    mov rdi, 1
    mov rsi, msg1
    mov rdx, 18
    syscall

    mov rax, 0
    mov rdi, 0
    mov rsi, num1
    mov rdx, 10
    syscall

    ; Solicita o segundo número
    mov rax, 1
    mov rdi, 1
    mov rsi, newline
    mov rdx, 1
    syscall

    mov rax, 1
    mov rdi, 1
    mov rsi, msg2
    mov rdx, 22
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
    call str_to_int
    mov rbx, rax  ; Armazena o primeiro número em rbx

    mov rsi, num2
    call str_to_int  ; Converte o segundo número
    ; O resultado da conversão está em rax

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
    sub rbx, rax  ; Subtrai o segundo número do primeiro
    mov rax, rbx  ; Move o resultado para rax
    jmp print_result

mul_op:
    imul rax, rbx
    jmp print_result

div_op:
    cmp rbx, 0          ; Verifica se o divisor (num2) é zero
    je div_error        ; Se for zero, pula para o tratamento de erro

    ; Para divisão, o dividendo deve estar em rax e o divisor em rbx
    mov rax, rbx        ; Coloca o primeiro número (num1) em rax (dividendo)
    mov rbx, rsi        ; Coloca o segundo número (num2) em rbx (divisor)
    xor rdx, rdx        ; Limpa rdx antes da divisão
    div rbx             ; Divide rax pelo divisor (num2)
    jmp print_result     ; Pula para imprimir o resultado

div_error:
    mov rax, 1          ; Prepara para escrever a mensagem de erro
    mov rdi, 1          ; File descriptor para stdout
    mov rsi, error_msg  ; Mensagem de erro
    mov rdx, 22         ; Tamanho da mensagem de erro
    syscall             ; Chama o sistema para escrever a mensagem
    jmp exit            ; Sai do programa

print_result:
    ; Converte o resultado de volta para string
    call int_to_str

    ; Exibe "Resultado: "
    mov rax, 1
    mov rdi, 1
    mov rsi, resultado_msg
    mov rdx, 11  ; Tamanho da mensagem "Resultado: "
    syscall

    ; Exibe o resultado calculado
    mov rax, 1
    mov rdi, 1
    mov rsi, result
    mov rdx, 11  ; Tamanho máximo do buffer
    syscall

    ; Exibe uma linha nova
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
    ; Converte string para inteiro
    mov rax, 0
    mov rcx, 10
.loop:
    movzx rdx, byte [rsi]
    cmp rdx, 10         ; Verifica se é o fim da string (enter)
    je .done
    sub rdx, '0'        ; Converte o caractere para número
    imul rax, rcx       ; Multiplica o número por 10
    add rax, rdx        ; Adiciona o dígito ao número
    inc rsi
    jmp .loop
.done:
    ret

int_to_str:
    ; Converte o número (armazenado em rax) para uma string
    mov rsi, result + 10  ; Começa do final do buffer
    mov byte [rsi], 0     ; Finaliza a string
    dec rsi
    mov rcx, 10
    test rax, rax
    jz .write_zero

.loop:
    xor rdx, rdx
    div rcx              ; Divide rax por 10
    add dl, '0'          ; Converte para caractere
    mov [rsi], dl        ; Coloca o caractere na posição correta
    dec rsi
    test rax, rax
    jnz .loop

.write_zero:
    ; Se o número for zero, coloca '0' na string
    mov byte [rsi], '0'
    ; Ajusta o ponteiro para o início da string
    mov rdi, result
    mov rdx, 11          ; Tamanho máximo do buffer
    sub rdx, rsi         ; Calcula o tamanho da string
    mov rax, rdx
    lea rsi, [rsi + 1]   ; Ajusta rsi para apontar para o início da string
    ret