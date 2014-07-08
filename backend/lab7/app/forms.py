from django import forms

from app.models import L_TYPES, T_CHOICE, Category, Item

class ItemForm(forms.Form):
	listing = forms.ChoiceField(choices=L_TYPES, initial='t')
	name = forms.CharField(max_length=255)
	category = forms.ModelChoiceField(Category.objects.all())
	department = forms.CharField(max_length=255)
	description = forms.CharField(widget=forms.Textarea)
	update_item = forms.DateTimeField()

	
	def clean_department(self):

		data = self.cleaned_data['department']

		if data not in ['Desarrollo', 'Herramientas', 'Test']:
			raise forms.ValidationError('El Departamento puede ser "Desarrollo", "Herramientas" y/o "Test"')

		return data
	

class CategoryForm(forms.Form):
	
	name = forms.CharField(max_length=255)
	slug = forms.CharField(max_length=255)
	description = forms.CharField(widget=forms.Textarea)
	update_category = forms.DateTimeField()
	type_category = forms.ChoiceField(choices=T_CHOICE, initial='u')
