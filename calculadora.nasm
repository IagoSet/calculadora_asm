section .data
	msg1 db 'Digite o primeiro numero: ', 0
	msg2 db 'Digite o segundo numero: ', 0
	msg3 db 'Escolha a operacao(+,-,*,/)', 0
	result_msg db 'Resultado: ', 0
	newline db 10,0
	error_msg db 'Erro: divisao por zero', 0
	
section.bss
	num1 resb 10
	num2 resb 10
	op resb 1
	result resb 10
section .text
	global_start
_start


