//////////////////////CẤU HÌNH KẾT NỐI KEPWARE////////////////////
const {TagBuilder, IotGateway} = require('kepserverex-js');
const tagBuilder = new TagBuilder({ namespace: 'ChannelLocNuoc.DeviceLocNuoc' });
const iotGateway = new IotGateway({
    host: '127.0.0.1',
    port: 5000
});

/////////////HÀM ĐỌC/GHI DỮ LIỆU XUỐNG KEPWARE(PLC)//////////////
//Đọc dữ liệu
var tagArr = [];///lưu dữ liệu khi đọc
function fn_tagRead(){
	iotGateway.read(TagList).then((data)=>{
		var lodash = require('lodash');
		tagArr = lodash.map(data, (item) => item.v);
		console.log(tagArr);
	});
}
// Ghi dữ liệu
function fn_Data_Write(tag,data){
    tagBuilder.clean();
    const set_value = tagBuilder
        .write(tag,data)
        .get();
    iotGateway.write(set_value);
}

///////////////////////////ĐỊNH NGHĨA TAG////////////////////////
// Khai báo tag
var bom1 		    = 'bom1';
var bom2 	      = 'bom2';
var bom3 	      = 'bom3';
var bom4 		    = 'bom4';
var bom5 		    = 'bom5';
var bom6 		    = 'bom6';
var bom_P1 		    = 'bom_P1';
var bom_P2 		    = 'bom_P2';
var bom_P3 		    = 'bom_P3';
var bom_P4 	      = 'bom_P4';
var BUTTON_MANU 	= 'BUTTON_MANU';
var BUTTON_AUTO     = 'BUTTON_AUTO';
var DEN_ACTIVE     = 'DEN_ACTIVE';
var DEN_AUTO     = 'DEN_AUTO';
var DEN_MANUAL     = 'DEN_MANUAL';
var ON 		        = 'ON';
var OFF 	    	= 'OFF';
var OFF_BOM1 		= 'OFF_BOM1';
var OFF_BOM2 		= 'OFF_BOM2';
var OFF_BOM3 		= 'OFF_BOM3';
var OFF_BOM4 		= 'OFF_BOM4';
var OFF_BOM5 	  = 'OFF_BOM5';
var OFF_BOM6 		= 'OFF_BOM6';
var OFF_BOM_P1 	    = 'OFF_BOM_P1';
var OFF_BOM_P2 	    = 'OFF_BOM_P2';
var OFF_BOM_P3 		= 'OFF_BOM_P3';
var OFF_BOM_P4 		= 'OFF_BOM_P4';
var ON_BOM1 		= 'ON_BOM1';
var ON_BOM2 		= 'ON_BOM2';
var ON_BOM3 		= 'ON_BOM3';
var ON_BOM4 		= 'ON_BOM4';
var ON_BOM5 		= 'ON_BOM5';
var ON_BOM6 		= 'ON_BOM6';
var ON_BOM_P1 		= 'ON_BOM_P1';
var ON_BOM_P2 		= 'ON_BOM_P2';
var ON_BOM_P3 		= 'ON_BOM_P3';
var ON_BOM_P4 		= 'ON_BOM_P4';
var CV 	        	= 'CV';
var CV1 	        = 'CV1';
var LAMP_RELAY1 	        = 'LAMP_RELAY1';
var LAMP_RELAY2 	        = 'LAMP_RELAY2';
var LAMP_RELAY3 	        = 'LAMP_RELAY3';
var LAMP_RELAY4 	        = 'LAMP_RELAY4';
var LMAP_RELAY5 	        = 'LMAP_RELAY5';
var LAMP_RELAY6 	        = 'LAMP_RELAY6';
var LAMP_RELAY_P1 	        = 'LAMP_RELAY_P1';
var LAMP_RELAY_P2 	        = 'LAMP_RELAY_P2';
var LAMP_RELAY_P3 	        = 'LAMP_RELAY_P3';
var LAMP_RELAY_P4 	        = 'LAMP_RELAY_P4';

// Đọc dữ liệu
const TagList = tagBuilder
.read(bom1)
.read(bom2)
.read(bom3)
.read(bom4)
.read(bom5)
.read(bom6)
.read(bom_P1)
.read(bom_P2)
.read(bom_P3)
.read(bom_P4)
.read(BUTTON_MANU)
.read(BUTTON_AUTO)
.read(DEN_ACTIVE)
.read(DEN_AUTO)
.read(DEN_MANUAL)
.read(ON)
.read(OFF)
.read(OFF_BOM1)
.read(OFF_BOM2)
.read(OFF_BOM3)
.read(OFF_BOM4)
.read(OFF_BOM5)
.read(OFF_BOM6)
.read(OFF_BOM_P1)
.read(OFF_BOM_P2)
.read(OFF_BOM_P3)
.read(OFF_BOM_P4)
.read(ON_BOM1)
.read(ON_BOM2)
.read(ON_BOM3)
.read(ON_BOM4)
.read(ON_BOM5)
.read(ON_BOM6)
.read(ON_BOM_P1)
.read(ON_BOM_P2)
.read(ON_BOM_P3)
.read(ON_BOM_P4)
.read(CV)
.read(CV1)
.read(LAMP_RELAY1)
.read(LAMP_RELAY2)
.read(LAMP_RELAY3)
.read(LAMP_RELAY4)
.read(LMAP_RELAY5)
.read(LAMP_RELAY6)
.read(LAMP_RELAY_P1)
.read(LAMP_RELAY_P2)
.read(LAMP_RELAY_P3)
.read(LAMP_RELAY_P4)

.get();

///////////////////////////QUÉT DỮ LIỆU////////////////////////
// Tạo Timer quét dữ liệu
setInterval(
	() => fn_read_data_scan(),
	1000 //1000ms quét 1 lần
);

// Quét dữ liệu
function fn_read_data_scan(){
	fn_tagRead();	// Đọc giá trị tag
}
// /////////////////////////THIẾT LẬP KẾT NỐI WEB/////////////////////////
var express = require("express");///gọi thư viện ex
var app = express();//gọi ứng dụng
app.use(express.static("public")); ///public thư viện ex
app.set("view engine", "ejs");///gọi file .ejs
app.set("views", "./views");///gọi thư mục view
var server = require("http").Server(app);/// gọi liên kết kết nối dạng http
var io = require("socket.io")(server);//gọi trương trình đọc dữ liệu tgian thực
server.listen(3000);///cài đặt cổng kết nối
// gọi file Home 
app.get("/", function(req, res){
    res.render("home")
});

///////////TRUYỀN NHẬN DỮ LIỆU VỚI TRÌNH DUYỆT WEB///////////////////
io.on("connection", function(socket){///đọc dữ liệu tgian thực
    // Bật hệ thống
    socket.on("cmd_On", function(data){
		fn_Data_Write(ON,data);
    });
    // Tắt hệ thống
    socket.on("cmd_Off", function(data){
        fn_Data_Write(OFF,data);
    });
    // Chọn chế độ tự động
    socket.on("cmd_Mode_Auto", function(data){
		fn_Data_Write(BUTTON_AUTO,data);
	});
    // Chọn chế độ bằng tay
    socket.on("cmd_Mode_Manu", function(data){
		fn_Data_Write(BUTTON_MANU,data);
	});
    // Nút nhấn mở bơm 1
    socket.on("cmd_manu_B1_open", function(data){
		fn_Data_Write(ON_BOM1,data);
	});
    // Nút nhấn đóng bơm 1
    socket.on("cmd_Manu_B1_Close", function(data){
		fn_Data_Write(OFF_BOM1,data);
	});
    // Nút nhấn mở bơm 2
    socket.on("cmd_Manu_B2_open", function(data){
		fn_Data_Write(ON_BOM2,data);
	});
    // Nút nhấn đóng bơm 2
    socket.on("cmd_Manu_B2_close", function(data){
		fn_Data_Write(OFF_BOM2,data);
	});
    // Nút nhấn mở bơm 3
    socket.on("cmd_Manu_B3_open", function(data){
      fn_Data_Write(ON_BOM3,data);
    });
      // Nút nhấn đóng bơm 3
      socket.on("cmd_Manu_B3_close", function(data){
      fn_Data_Write(OFF_BOM3,data);
    });
     // Nút nhấn mở b4
    socket.on("cmd_Manu_B4_open", function(data){
      fn_Data_Write(ON_BOM4,data);
    });
      // Nút nhấn đóng b4 
      socket.on("cmd_Manu_B4_close", function(data){
      fn_Data_Write(OFF_BOM4,data);
      });  
      // Nút nhấn mở b5
      socket.on("cmd_Manu_B5_open", function(data){
      fn_Data_Write(ON_BOM5,data);
    });
      // Nút nhấn đóng b5 
      socket.on("cmd_Manu_B5_close", function(data){
      fn_Data_Write(OFF_BOM5,data);
      });  
      // Nút nhấn mở b6
      socket.on("cmd_Manu_B6_open", function(data){
      fn_Data_Write(ON_BOM6,data);
    });
      // Nút nhấn đóng b6 
      socket.on("cmd_Manu_B6_close", function(data){
      fn_Data_Write(OFF_BOM6,data);
      });  
      // Nút nhấn mở BP1
      socket.on("cmd_Manu_BP1_open", function(data){
      fn_Data_Write(ON_BOM_P1,data);
    });
      // Nút nhấn đóng BP1 
      socket.on("cmd_Manu_BP1_close", function(data){
      fn_Data_Write(OFF_BOM_P1,data);
      });  
      // Nút nhấn mở BP2
      socket.on("cmd_Manu_BP2_open", function(data){
      fn_Data_Write(ON_BOM_P2,data);
      });
       // Nút nhấn đóng BP2 
       socket.on("cmd_Manu_BP2_close", function(data){
      fn_Data_Write(OFF_BOM_P2,data);
      });
      // Nút nhấn mở BP3
      socket.on("cmd_Manu_BP3_open", function(data){
      fn_Data_Write(ON_BOM_P3,data);
      });
       // Nút nhấn đóng BP3 
       socket.on("cmd_Manu_BP3_close", function(data){
      fn_Data_Write(OFF_BOM_P3,data);
      });
      // Nút nhấn mở BP4
      socket.on("cmd_Manu_BP4_open", function(data){
      fn_Data_Write(ON_BOM_P4,data);
      });
       // Nút nhấn đóng BP4 
       socket.on("cmd_Manu_BP4_close", function(data){
      fn_Data_Write(OFF_BOM_P4,data);
      });
  
  
    
});

// ///////////LẬP BẢNG TAG ĐỂ GỬI QUA CLIENT (TRÌNH DUYỆT)///////////
function fn_tag(){
    io.sockets.emit("bom1", tagArr[0]);
    io.sockets.emit("bom2", tagArr[1]);
    io.sockets.emit("bom3", tagArr[2]);
    io.sockets.emit("bom4", tagArr[3]);
    io.sockets.emit("bom5", tagArr[4]);
    io.sockets.emit("bom6", tagArr[5]);
    io.sockets.emit("bom_P1", tagArr[6]);
    io.sockets.emit("bom_P2", tagArr[7]);
    io.sockets.emit("bom_P3", tagArr[8]);
    io.sockets.emit("bom_P4", tagArr[9]);
    io.sockets.emit("BUTTON_MANU", tagArr[10]);
    io.sockets.emit("BUTTON_AUTO", tagArr[11]);
    io.sockets.emit("DEN_ACTIVE", tagArr[12]);
    io.sockets.emit("DEN_AUTO", tagArr[13]);
    io.sockets.emit("DEN_MANUAL", tagArr[14]);
    io.sockets.emit("ON", tagArr[15]);
    io.sockets.emit("OFF", tagArr[16]);
    io.sockets.emit("OFF_BOM1", tagArr[17]);
    io.sockets.emit("OFF_BOM2", tagArr[18]);
    io.sockets.emit("OFF_BOM3", tagArr[19]);
    io.sockets.emit("OFF_BOM4", tagArr[20]);
    io.sockets.emit("OFF_BOM5", tagArr[21]);
    io.sockets.emit("OFF_BOM6", tagArr[22]);
    io.sockets.emit("OFF_BOM_P1", tagArr[23]);
    io.sockets.emit("OFF_BOM_P2", tagArr[24]);
    io.sockets.emit("OFF_BOM_P3", tagArr[25]);
    io.sockets.emit("OFF_BOM_P4", tagArr[26]);
    io.sockets.emit("ON_BOM1", tagArr[27]);
    io.sockets.emit("ON_BOM2", tagArr[28]);
    io.sockets.emit("ON_BOM3", tagArr[29]);
    io.sockets.emit("ON_BOM4", tagArr[30]);
    io.sockets.emit("ON_BOM5", tagArr[31]);
    io.sockets.emit("ON_BOM6", tagArr[32]);
    io.sockets.emit("ON_BOM_P1", tagArr[33]);
    io.sockets.emit("ON_BOM_P2", tagArr[34]);
    io.sockets.emit("ON_BOM_P3", tagArr[35]);
    io.sockets.emit("ON_BOM_P4", tagArr[36]);
    io.sockets.emit("CV", tagArr[37]);
    io.sockets.emit("CV1", tagArr[38]);
    io.sockets.emit("LAMP_RELAY1", tagArr[39]);
    io.sockets.emit("LAMP_RELAY2", tagArr[40]);
    io.sockets.emit("LAMP_RELAY3", tagArr[41]);
    io.sockets.emit("LAMP_RELAY4", tagArr[42]);
    io.sockets.emit("LMAP_RELAY5", tagArr[43]);
    io.sockets.emit("LAMP_RELAY6", tagArr[44]);
    io.sockets.emit("LAMP_RELAY_P1", tagArr[45]);
    io.sockets.emit("LAMP_RELAY_P2", tagArr[46]);
    io.sockets.emit("LAMP_RELAY_P3", tagArr[47]);
    io.sockets.emit("LAMP_RELAY_P4", tagArr[48]);
    
}
// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////
io.on("connection", function(socket)
{
    socket.on("Client-send-data", function(data)
    {
    fn_tag();}
    );
});

// ++++++++++++++++++++++++++GHI DỮ LIỆU XUỐNG PLC+++++++++++++++++++++++++++
// MÀN HÌNH MAIN
io.on("connection", function(socket)
{
    socket.on("cmd_Main_Edit_Data", function(data){
        fn_Data_Write(CV,data[0]);
        fn_Data_Write(CV1,data[0]);
        
    });
});
// MÀN HÌNH MANU
io.on("connection", function(socket)
{
    socket.on("cmd_S1_Edit_Data", function(data){
        fn_Data_Write(CV,data[0]);
        fn_Data_Write(CV1,data[0]);
    });
});
