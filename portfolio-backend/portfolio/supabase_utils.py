# portfolio/supabase_utils.py
from supabase import create_client
from django.conf import settings

supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

def upload_file_to_supabase(file_obj, file_name: str):
    """
    Upload file to Supabase storage and return public URL
    """
    file_content = file_obj.read()
    response = supabase.storage.from_(settings.SUPABASE_BUCKET).upload(file_name, file_content)
    if response.get("error"):
        raise Exception(f"Supabase upload error: {response['error']['message']}")
    return supabase.storage.from_(settings.SUPABASE_BUCKET).get_public_url(file_name)
