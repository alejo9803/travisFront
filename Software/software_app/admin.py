from django.contrib import admin

from software_app.models import Psicologo

from software_app.models import Paciente

from software_app.models import Pregunta

from software_app.models import Pregunta_Paciente

from software_app.models import Historia

admin.site.register(Psicologo)

admin.site.register(Paciente)

admin.site.register(Pregunta)

admin.site.register(Pregunta_Paciente)

admin.site.register(Historia)
# Register your models here.
