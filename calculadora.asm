
section .data
	mag1 db 'Digite um numero: ',0
	msg2 db 'Digite outro numero: ',0
	msg3 db 'Escolha uma operacao (+, -, *, /): ',0
	resultado db 'Resultado: ',0
	newline db 10, 0
	error_msg db 'Erro: divisao por zero', 0

section .bss
	num 1 resb 10
	num 2 resb 10
	result resb 10

section .text
	global_start

_start:
	mov rax, 1
	mov rdi, 1
	mov rsi, msg1
	mov rdx, 25
	syscall

	mox rax, 0
	mov rdi,0
	mov rsi, num1
	mov rdx, 10
	syscall

	mov rax, 1
	mov rdi, 1
	mov rsi, msg2
	mov rdx, 25
	syscall

	mov rax, 0
	mov rdi, 0
	mov rsi, num2
	mov rdx,10
	syscall

	mov rax, 1
	mov rdi, 1
	mov rsi, msg3
	mov rdx, 25
	syscall

	mov rax, 0
	mov rdi, 0
	mov rsi, op
	mov rdx, 2
	syscall

	call str_to_int
	mov rbx, rax
	call str_to_int

	mov rcx,[op]
	cmp rcx, '+'
	je add_op
	cmp rcx, '-'
	je sub_op
	cmp rcx, '*'
	je mul_op
	cmp rcx, '/'
	je div_op
	jmp exit

add_o:
	add rax, rbx
	jmp print_result

sub_op:
	sub rax, rbx
	jmp print_result

mul_op:
	imul rax, rbx
	jmp print_result

div_op:
	cmp rbx, 0
	je div_error
	xor rdx, rdx
	div rbx
	jmp print_result

div_error:
	mov rax, 1
	mov rdi, 1
	mov rsi, error_msg
	mov rdx, 19
	syscall
	jmp exit

print_result:
	call int_to_str

	mov rax, 1
	mov rdi, 1
	mov rsi, result_msg
	mov rdx, 10
	syscall

	mov rax, 1
	mov rdi, 1
	mov rsi, result
	mov rdx, 1
	syscall

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

	mov rax, 0
	mov rcx, 10
.loop:
	movzx rdx, byte [rsi]
	cmp rdx, 10
	je .done
	sub rdx, '0'
	imul rax, rcx
	add rax, rdx
	inc ris
	jmp .loop
.done:
	ret

int_to_str:
	mov rsi, result +9
	mov byte [rsi], 0
	dec rsi
	mov rcx, 10
.loop:
	xor rdx, rdx
	div rcx
	add dl, '0'
	mov [rsi], dl
	dec rsi
	test rax, rax
	jnz .loop
	inc rsi
	ret

