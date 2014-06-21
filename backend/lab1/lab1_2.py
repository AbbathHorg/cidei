# -*- coding: utf-8 -*-

"""

Program: lab1_2.py
Author: Victor Hernandez

1. Ingresar el valor para saber el rango 
	a traves de la linea de comandos ingresamo el valor de la calificacion
2. Mostrar el tipo de calificacion
	Se muestra en linea de commandos la valoracion para el rngo de la calificacion

"""

number = input("Ingrese el numero de su calificacion: ")

if number > 89:
	letter = 'S'
elif number > 79:
	letter = 'B'
elif number > 69:
	letter = 'A'
else:
	letter = 'Un caso perdido'

print "Su calificacion esta dentro del rango: ", letter