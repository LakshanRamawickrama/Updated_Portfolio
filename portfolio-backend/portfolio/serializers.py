from rest_framework import serializers
from .models import Project, Skill, SkillCategory,Education, Certificate, Experience, ContactMessage, Resume

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "level"]

class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = SkillCategory
        fields = ["id", "name", "icon", "skills"]


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'degree', 'institution', 'period', 'status', 'description', 'type']


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id', 'title', 'issuer', 'date', 'description', 'credentialUrl']

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ["id", "title", "company", "period", "type", "description", "skills"]
        
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "subject", "message", "created_at"]
        
class ResumeSerializer(serializers.ModelSerializer):
    public_url = serializers.SerializerMethodField()

    class Meta:
        model = Resume
        fields = ['id', 'title', 'file', 'uploaded_at', 'public_url']

    def get_public_url(self, obj):
        # If using Supabase, store the public URL in your model or construct it
        # Example: "https://<SUPABASE_URL>/storage/v1/object/public/resumes/<filename>"
        return f"https://crgaqiszkxmkuyxqacvk.supabase.co/storage/v1/object/public/resumes/{obj.file.name.split('/')[-1]}"