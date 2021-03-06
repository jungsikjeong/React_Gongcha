리액트로 공차 사이트를 만들어봤습니다.


# 이슈

1. 프로필(닉네임 및 이미지) 변경시 header에 표시되는 유저 프로필이미지 및 닉네임이 바로 최신화가안됨

2. 닉네임 및 프로필이미지를 변경하면 기존에 작성했던 게시글들의 닉네임과 프로필이미지가 최신화가 안됨

3. 이슈 2번과 비슷하다. 하지만 이번엔 댓글이다. 댓글의 닉네임과 프로필이미지가 최신화가 안됨

4. 댓글 작성시, 방금 작성된 댓글만 정상으로보이고 기존 댓글들은 이미지 엑박 + 유저 닉네임이 안보여짐 + 콘솔 확인해보면 404에러.

5. 게시글과 댓글의 좋아요 하트를 누르고 로그아웃후 다른 사용자아이디로 들어오면 좋아요눌러졌다는 하트가 표시되어있음..

# 🎈이슈 해결

1. server쪽에서 res.json로 클라이언트에 보내주지않아서 데이터가 최신화가 안되었음

2. Post 스키마에서 user:ref:users => user:ref:user로 변경후 게시글 조회 api에 populate로 유저와 유저아바타,닉네임을가져와준후 프론트에서는 post.user.name 및 post.user.avatar로 화면에 뿌려주었음

3. console.log를 해본 결과 user는 객체형태로 잘 작성이되었는데, 조회할때 user:\_id로 조회가되었다. 이 현상을토대로 게시글을 조회할 때 populate를 한번 더 써서 해결함.

```javascript
const post = await Post.findById(req.params.id)
  .populate('user', ['name', 'avatar'])
  .populate('comments.user', ['name', 'avatar']);
```

4. 원인은 프론트쪽이아닌 서버쪽에있었음. populate를 사용하여 해결!

- 단톡방에서 있었던 내용

    " 방금작성한 데이터는 user.findById 를 통해 유저 정보를 가져온 후에 newComment 객체에 담기때문에 조회할수있는데 댓글 작성 api쪽에는 populate 가 없어요... "

- filter을 사용하여 해결함.
