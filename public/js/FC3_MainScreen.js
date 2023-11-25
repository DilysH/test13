
// Hàm chức năng đọc dữ liệu lên IO Field
function fn_Main_IOField_IO(tag, IOField, tofix)
{
    socket.on(tag, function(data){
        if (tofix == 0 & Main_data_edditting != true)
        {
            document.getElementById(IOField).value = data;
        }
        else if(Main_data_edditting != true)
        {
            document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}