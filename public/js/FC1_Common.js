////////////// YÊU CẦU DỮ LIỆU TỪ SERVER- REQUEST DATA //////////////
var myVar = setInterval(myTimer, 100);
function myTimer() {
    socket.emit("Client-send-data", "Request data client");
}

// Hàm hiển thị dữ liệu lên IO Field
function fn_IOFieldDataShow(tag, IOField, tofix){
    socket.on(tag,function(data){
        if(tofix == 0){
            document.getElementById(IOField).value = data;
        } else{
        document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}

// Hàm hiển thị màu nút nhấn
function fn_btt_Color(tag, bttID, on_Color, off_Color){  ///gọi thuộc tính nút///
    socket.on(tag,function(data){
        if(data == true){
            document.getElementById(bttID).style.backgroundColor = on_Color;
        } else{
            document.getElementById(bttID).style.backgroundColor = off_Color;
        }
    });
}
// Hàm chức năng hiển thị trạng thái symbol
function fn_SymbolStatus(ObjectID, SymName, Tag)  /// tạo chương trình con hiển htij theo giá trị tag///
{  /// tạo biến để tạo đường link dẫn tới ảnh///
    var imglink_0 = "images/Symbol/" + SymName + "_0.png"; // Trạng thái tag = 0
    var imglink_1 = "images/Symbol/" + SymName + "_1.png"; // Trạng thái tag = 1
    
    socket.on(Tag, function(data){
        if (data == 0)
        {
            document.getElementById(ObjectID).src = imglink_0;  // nếu tag đầu vào có giá trị bằng 0 thì hiển thị ảnh vsđường link_0///
        }
        else if (data == 1)
        {
            document.getElementById(ObjectID).src = imglink_1;
        }
        else
        {
            document.getElementById(ObjectID).src = imglink_0;
        }
    });
}

// Chương trình con chuyển trang
function fn_ScreenChange(scr_1, scr_main)
{
    document.getElementById(scr_1).style.visibility = 'visible';   // Hiển thị trang được chọn
    document.getElementById(scr_main).style.visibility = 'hidden';    // Ẩn trang 1
}
