from django.shortcuts import render_to_response, get_object_or_404
from django.template import Context
from app.models import Category, Item
from app.forms import ItemForm

def index(request):
	inicio = Context({'title' : 'Inicio'})
	return render_to_response('index.html', inicio)

def items(request):
	item = Item.objects.all()
	context = Context({'items' : item})
	return render_to_response('items.html', context)

def categories(request):
	category = Category.objects.all()
	context = Context({'categories' : category})
	return render_to_response('categories.html', context)

def category_details(request, slug):
	category = get_object_or_404(Category, slug=slug)
	context = Context({'category' : category})
	return render_to_response('category-details.html', context)

def item_details(request, item_id):
	item = get_object_or_404(Item, id=item_id)
	context = Context({'item' : item})
	return render_to_response('item-details.html', context)

def add_item(request):
	if request.method == "POST":
		form = ItemForm(request.POST)
		if form.is_valid():
			#Crear un nuevo i
			item = Item.objects.create(
				listing = form.cleaned_data['listing'],
				name = form.cleaned_data['name'],
				category = form.cleaned_data['category'],
				department = form.cleaned_data['department'],
				description = form.cleaned_data['description'],
				update_item = form.cleaned_data['update_item'],
			)
			#Siempre que cree el dato correctamente redireccionar
			return HttpResponseRedirect('/items/%s/' % item.id)
	else:
		form = ItemForm()

	context = Context({'title' : 'Adicionar item', 'form' : form})
	return render_to_response('form.html', context)