
// Hàm chức năng đọc dữ liệu lên IO Field
function fn_S1_IOField_IO(tag, IOField, tofix)
{
    socket.on(tag, function(data){
        if (tofix == 0 & S1_data_edditting != true)
        {
            document.getElementById(IOField).value = data;
        }
        else if(S1_data_edditting != true)
        {
            document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}