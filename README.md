리액트로 공차 사이트를 만들어봤습니다.

# 이슈

1. 프로필(닉네임 및 이미지) 변경시 header에 표시되는 유저 프로필이미지 및 닉네임이 바로 최신화가안됨

2. 닉네임 및 프로필이미지를 변경하면 기존에 작성했던 게시글들의 닉네임과 프로필이미지가 최신화가 안됨

3. 이슈 2번과 비슷하다. 하지만 이번엔 댓글이다. 댓글의 닉네임과 프로필이미지가 최신화가 안됨

4. 댓글 작성시, 방금 작성된 댓글만 정상으로보이고 기존 댓글들은 이미지 엑박 + 유저 닉네임이 안보여짐 + 콘솔 확인해보면 404에러.

# 🎈이슈 해결

1. [미해결] 처음 프로필편집할땐 정상작동, 이후 두번째부턴 밀리는현상발생

2. Post 스키마에서 user:ref:users => user:ref:user로 변경후 게시글 조회 api에 populate로 유저와 유저아바타,닉네임을가져와준후 프론트에서는 post.user.name 및 post.user.avatar로 화면에 뿌려주었음

3. console.log를 해본 결과 user는 객체형태로 잘 작성이되었는데, 조회할때 user:\_id로 조회가되었다. 이 현상을토대로 게시글을 조회할 때 populate를 한번 더 써서 해결함.

```javascript
const post = await Post.findById(req.params.id)
  .populate('user', ['name', 'avatar'])
  .populate('comments.user', ['name', 'avatar']);
```

4. [해결중]
