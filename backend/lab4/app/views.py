from django.shortcuts import render_to_response, get_object_or_404
from django.template import Context
from app.models import Category

def index(request):
	category = Category.objects.all()
	context = Context({'title' : 'hola CIDEI', 'category' : category})
	return render_to_response('index.html', context)

def details(request, cate_id):
	cate = get_object_or_404(Category, id=cate_id)
	context = Context({
		'title' : 'Detalle de: %s' % cate.name,
		'cate' : cate
		})
	return render_to_response('details.html', context)