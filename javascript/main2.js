var nombre2;
function filePreview2(input) 
        {
            if (input.files && input.files[0])
            {
                var reader = new FileReader();
                reader.onload = function(e)
                {
                    $('#uploadForm2 + img').remove();
                    $('#uploadForm2').after('<img src="'+e.target.result+'" width = "65" height="66" />');
                }
                reader.readAsDataURL(input.files[0]);
                var nombre = (input.files[0].name);
                var jpg = nombre.replace(".jpg","").replace(".png","").replace(".PNG","");
                nombre2 = jpg.substring(3);
                document.getElementById("texto-encima2").value = nombre2;
            }    
        }

        $('#file2').change(function () { 
            filePreview2(this);
            
        });