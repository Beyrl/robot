$(function () {
    $('#btnBox').on('click', function (e) {
        let ele = $('#chatContent'),
        inputVal = $('#btnBox').parent().find('input').val(),
        userChatHtml="",
        BotChatHtml="";
        userChatHtml +=`<div class="user">
                            <div class="content">${inputVal}</div>
                            <div class="portrait">Use</div>
                        </div>`;
        
        $("#chatContent").append(userChatHtml);
        $('#btnBox').parent().find('input').val("");
        $("#chatContent").scrollTop($("#chatContent")[0].scrollHeight);
        setTimeout(()=>{
            BotChatHtml +=`<div class="robot">
                                <div class="portrait">BOT</div>
                                <div class="content">你好</div>
                            </div>`;
            $("#chatContent").append(BotChatHtml);
            $("#chatContent").scrollTop($("#chatContent")[0].scrollHeight);
        },2000)
        
    })
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#btnBox").trigger("click")
        }
      });
});