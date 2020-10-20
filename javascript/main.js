var nombre2;
function filePreview(input) 
        {
               
            if (input.files && input.files[0])
            {
                var reader = new FileReader();
                
                reader.onload = function(e)
                
                {
                    $('#uploadForm +img').remove();
                    $('#uploadForm').after('<img src="'+e.target.result+'" width = "65" height="66" />');
                }
                reader.readAsDataURL(input.files[0]);
                var nombre = (input.files[0].name);
                var jpg = nombre.replace(".jpg","").replace(".png","").replace(".PNG","");
                nombre2 = jpg.substring(3);
                document.getElementById("texto-encima").value = nombre2;
                
                
            }    
        }

        $('#file').change(function () { 
            filePreview(this);
            
        }
        

    );

