// Danh sách người dùng
var admin = ["hangpham","23102001"]
var user1 = ["a","123456"]

// Chương trình con
function login()
{
    var a = document.getElementById("inputuser").value;
    var b = document.getElementById("inputpass").value;
    // Admin
    if (a == admin[0] && b == admin[1])
    {
        fn_ScreenChange('Screen_Main','Screen_1');
        document.getElementById('id01').style.display='none';
    }
    // User 1
    else if (a == user1[0] && b == user1[1])
    {
        fn_ScreenChange('Screen_Main','Screen_1');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_Main").disabled = true;
        document.getElementById("btt_Screen_1").disabled = true;
    }
}
function logout() // Ctrinh login
{
    alert("Đăng xuất thành công");
    window.location.href = 'Dev_by_HangPham_project_loc_nuoc';
}