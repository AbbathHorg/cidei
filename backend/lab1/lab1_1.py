# -*- coding: utf-8 -*-
"""

Program: lab1-1.py
Author: Victor Hernandez

Calcular la tasa de impuesto de un alimento

1. Declaracion de variables 
	tax tasa de impuesto
	tax_one tasa de impuesto adicional
2. Entradas
	Valor del alimento
	Numero del alimento
3. Computaciones:
	tasa de entrada: suma de numero de alimento + tax + tax_one
4. Salida:
	El calculo de los elementos comprados

"""

#Declaraciones de Constantes
TAX = 0.16
TAX_ONE = 0.03

#Entradas de teclado

food = input('Ingrese el valor del Alimento')
amount_food = input('Ingrese la cantidad de Alimentos')

#Computaciones

total = (food * amount_food) * (TAX + TAX_ONE)

#Salidas

print "El total de los alimentos es: ", total
