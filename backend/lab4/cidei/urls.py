from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cidei.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

     url(r'^$', 'app.views.index'),
     url(r'^items/$', 'app.views.items'),
     url(r'^categories/$', 'app.views.categories'),
     url(r'^categories/(?P<slug>[\w-]+)/$', 'app.views.category_details'),
     url(r'^items/(?P<item_id>\d+)/$', 'app.views.item_details'),
     url(r'^items/add/$', 'app.views.add_item', name="add-items"),
)
