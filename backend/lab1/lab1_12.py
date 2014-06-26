class Person(object):
	""" Representacion de una persona """

	def __init__(self, name=" ", id_person=" ", age=" "):
		""" Se inicializan las variables """
		self._name = name
		self._id = id_person
		self._age = age

	def getName(self):
		""" Retornando el nombre """
		return self._name

	def getId(self):
		""" Retornando el id """
		return self._id

	def getAge(self):
		""" Retornando la edad """
		return self._age

	def __str__(self):
		""" Retornando los string de la clase persona """
		return "%s - %s -%s" % (self._name, self._id, self._age)

class Student(Person):
	#Constructor de la clase Student
	def __init__(self, name, id_person, age, number):
		self._assigments = []
		self._score = []
		for count in xrange(number):
			self._assigments.append("empty")

		for count in xrange(number):
			self._score.append(0)
		super(Student, self).__init__(name, id_person, age)

	def getAssigments(self, i):
		""" Retornando la asignatura """
		return self._assigments[i-1]

	def getScore(self, i):
		""" Retorna el valor del score """
		return self._scores[i-1]

	def setAssigments(self, i, assigments):
		""" Reset del score, continua desde 1 """
		self._assigments[i-1] = assigments

	def setScore(self, i, score):
		""" Reset del score, continua desde 1 """
		self._scores[i-1] = score

class Teacher(Person):
	#Constructor de la clase Teacher
	def __init__(self, name=" ", id_person=" ", age=" ", profession=" ", number_id=0):
		self._profession = profession
		self._number_id = number_id
		super(Teacher, self).__init__(name, id_person, age)

	def getProfession(self):
		""" Retornando la profesion """
		return self._profession

	def getNumber_id(self):
		""" Retornando la tarjeta profesional """
		return self._number_id
