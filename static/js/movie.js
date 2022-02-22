
function search_mlist(){


    $.ajax({
        // 동기인지 비동기방식인지를 명시
        async : true,
        // 기본 url
        url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
        // 입력 parameter
        data : {
            key : '5b015a49a0f1ae63cd63b5a1ba139a86',
            openStartDt : '2010',
            openEndDt : '2011',
        },
        // 호출방식
        method : 'GET',
        // timeout 설정(밀리세컨드 단위 1/1000초)
        // 정해진 시간안에 response가 오지 않으면 AJAX호출이 실패했다고 간주
        timeout : 3000,
        // 결과로 전달되는 JSON은 문자열. 이 문자열은 처리하기가 힘듦.
        // javascript 객체로 변환
        dataType : 'json',
        // 만약 성공하면 아래의 함수가 호출
        success : function (result) {
            $('tbody').empty()
            for (i = 0; i < 10; i++) {
                let tr = $('<tr></tr>')
                let directorTd = $('<td></td>').text(result['movieListResult']['movieList'][i]['directors'])
                let genreTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['genreAlt'])
                let titleTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['movieNm'])
                let openTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['openDt'])

                tr.append(directorTd)
                tr.append(genreTd)
                tr.append(titleTd)
                tr.append(openTd)
                $('tbody').append(tr)

            }
        },
        // 만약 호출에 실패하면 아래의 함수가 호출
        error : function (){
            alert('먼가 이상해요!!')
        }
    });
}



















