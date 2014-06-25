"""

File: lab1_6.py
Para que no se les olvide esto es un comentario del tipo Docstring
"""

numero = input("Ingrese el string de bits: ")

binario = 2

lista = []

while numero > 0 :
	lista.append(numero % binario)

print "El binario es: ", 