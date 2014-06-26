"""

File: lab1_7.py

Generador de sentencias aleatoreas con palabras
"""

import random

articles = ("Un", "El", "Ella", "Nosotros", "Yo",)

nouns = ("Mujer", "Hombre", "Carro", "Moto", "Perro", "Avion",)

verbs = ("Gustar", "Hablar", "Comer", "Decir",)

preposition = ("con", "por",)

def sentences():
	""" Construir y retornar una oracion o sentencia """
	return nounPhrase() + " " + verbPhrase()

def nounPhrase():
	""" Construir y retornar una frase con palabras """
	return random.choice(articles) + " " + random.choice(nouns)

def verbPhrase():
	""" Construir y retornar una frase con verbo """
	return random.choice(verbs) + " " + nounPhrase() + prepositionalPhrase()

def prepositionalPhrase():
	""" Construir y retornar una preposicion a la frase """
	return random.choice(preposition) + " " + nounPhrase()

def main():
	""" El usuario genera el numero de frases a construir """
	number = input("Ingrese el numero de frases a contruir: ")
	for count in xrange(number):
		print sentences()

main()