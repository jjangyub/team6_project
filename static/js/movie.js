
function search_mlist() {

    let search_movie = $('#searchMovie').val()

    if (search_movie == "") {
        alert('검색어를 입력해주세요!')
    }

    else {

        alert(search_movie)

        $.ajax({
            async: true,
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
            data: {
                key: '5b015a49a0f1ae63cd63b5a1ba139a86',
                movieNm: search_movie,
            },
            type: 'GET',
            timeout: 3000,
            // 결과로 전달되는 JSON은 문자열. 이 문자열은 처리하기가 힘듦.
            // javascript 객체로 변환
            dataType: 'json',
            // 만약 성공하면 아래의 함수가 호출
            success : function(result) {
                console.log(reuslt)

                $('tbody').empty()

                // <th scope="col">영화 제목</th>
                // <th scope="col">포스터 이미지</th>
                // <th scope="col">제작년도</th>
                // <th scope="col">장르</th>
                // <th scope="col">상세보기</th>

                for (i = 0; i < 10; i++) {
                    let tr = $('<tr></tr>')
                    let titleTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['movieNm'])
                    let imgTd = $('<td></td>')
                    let searchTitle = result['movieListResult']['movieList'][i]['movieNm'] + " 포스터"
                    let movieCd = result['movieListResult']['movieList'][i]['movieCd']
                    let img = $('<img />')
                    imgTd.append(img)
                    $.ajax({
                        async: true,
                        url: 'https://dapi.kakao.com/v2/search/image',
                        method: 'GET',
                        headers: {
                            Authorization: "KakaoAK " + 'cf0517506a09c39e970bb3cef7b670f9'
                        },
                        data: {
                            query: searchTitle
                        },
                        timeout: 4000,
                        dataType: 'json',
                        success: function(result) {
                            $('#myDiv').empty()
                            let imgUrl = result['documents'][0]['thumbnail_url']
                            img.attr('src',imgUrl)
                        },
                        error: function() {
                            alert('먼가 이상해요!')
                        }
                    })

                    let openTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['openDt'])
                    let genreTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['genreAlt'])
                    let detailTd = $('<td></td>')
                    let detailBtn = $('<button></button>').text('삭제').addClass('btn btn-warning')
                    detailBtn.on('click',function(){
                        $.ajax({
                            async : true,
                            url: '/movie/detail/',
                            type : GET,
                            data : {
                                // api에 넘겨야하는 데이터

                            },
                            dataType : 'json',
                            timeout : 3000,
                            success : function(result){
                                // <tr>
                                //     <td>1,001</td>   //영화제목
                                //     <td>data</td>    //영화제목 영어로
                                //     <td>placeholder</td> //러닝타임
                                //     <td>text</td>    // 감독님 이름
                                //     <td>text</td>    // 개봉연도
                                //     <td>text</td>    // 장르명
                                //      <td>text</td>    // 배우이름-맡은 배역
                                // </tr>
                                let tr = $('<tr></tr>')
                                alert('상세보기 버튼 눌림')

                            },
                        error : function(){
                                alert('먼가 이상해요!')
                        }
                        })
                    })

                    detailTd.append(detailBtn)
                    tr.append(titleTd)
                    tr.append(imgTd)
                    tr.append(openTd)
                    tr.append(genreTd)
                    tr.append(detailTd)
                    $('tbody').append(tr)
                }
            },
            // 만약 호출에 실패하면 아래의 함수가 호출
            error: function () {
                alert('먼가 이상해요!!')
            }
        });
    }
}


















