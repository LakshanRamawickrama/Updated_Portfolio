from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from portfolio.views import ProjectViewSet, SkillCategoryViewSet, EducationViewSet, CertificateViewSet, ExperienceViewSet, ContactMessageViewSet, ResumeListView

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillCategoryViewSet)
router.register(r'education', EducationViewSet)
router.register(r'certificates', CertificateViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/resume/', ResumeListView.as_view(), name='resume-list'),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
