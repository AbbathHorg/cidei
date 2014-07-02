from app.models import Category, Item
from autofixture import generators, register, AutoFixture

import random

nouns = ("Hardware", "Software", "Memory", "Disc", "Machine", "Keyboard",)

class CategoryFixture(AutoFixture):
	field_values = {
		'name' : generators.random.choice(nouns),
		'slug' : generators.SlugGenerator('cidei'),
	}

class ItemFixture(AutoFixture):
	field_values = {
		'update_time' : generators.DateTimeGenerator(),		
	}

register(Category, CategoryFixture)
register(Item, ItemFixture)