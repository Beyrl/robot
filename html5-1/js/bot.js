$(function () {
    $('#btnBox').on('click', function (e) {
        let ele = $('#chatContent'),
        inputVal = $('#btnBox').parent().find('input').val(),
        userChatHtml="",
        BotChatHtml="";
        userChatHtml =`<div class="user">
                            <div class="content">${inputVal}</div>
                            <div class="portrait">Use</div>
                        </div>`;
        if(!inputVal){return }
        $("#chatContent").append(userChatHtml);
        $('#btnBox').parent().find('input').val("");
        $("#chatContent").scrollTop($("#chatContent")[0].scrollHeight);
        setTimeout(()=>{
            BotChatHtml =`<div class="robot">
                                <div class="portrait"></div>
                                <div class="content">I can't understand, can you try some other questions.</div>
                            </div>`;
            $("#chatContent").append(BotChatHtml);
            $("#chatContent").scrollTop($("#chatContent")[0].scrollHeight);
        },1000)
        
    })
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#btnBox").trigger("click")
        }
      });
});