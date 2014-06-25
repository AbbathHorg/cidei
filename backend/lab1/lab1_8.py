"""

File: lab1_8.py

Resolucion ecuacion cuadratica
"""
import math

def result1(**kwargs):
	operacion1 = (- b + raiz(**kwargs)) / 2 * a
	return operacion1

def raiz(**kwargs):
	raizcu = sqrt(b ** 2 - 4(a * c))
	return raizcu

def result2(**kwargs):
	operacion2 = (- b - raiz()) / 2 * a
	return operacion2

def main():
	""" El usuario ingresa los valores de a, b y c """
	a = input("Ingrese el valor de a: ")
	b = input("Ingrese el valor de b: ")
	c = input("Ingrese el valor de c: ")

	print "El resultado de X1 es: ", result1(a, b, c)
	print "El resultado de X2 es: ", result2(a, b, c)
main()