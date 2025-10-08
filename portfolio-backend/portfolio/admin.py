from django.contrib import admin
from .models import Project, Skill, Education, Certificate, Resume, SkillCategory, Experience

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "type")
    search_fields = ("title", "type", "technologies")

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "level", "category")
    search_fields = ("name", "category")

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "icon")
    search_fields = ("name",)

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("degree", "institution", "period", "status", "type")
    search_fields = ("degree", "institution", "type")

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ("title", "issuer", "date")
    search_fields = ("title", "issuer", "date")

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')
    
@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("title", "company", "period", "type")
    search_fields = ("title", "company", "type")
    

