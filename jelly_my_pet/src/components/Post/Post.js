import React, { Fragment } from "react";
import { Form, Input, Button, Card, Icon, Avatar } from "antd";
import { withRouter } from "react-router-dom";

const dummyPost = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "Jaemin"
      },
      content: "첫번째 게시글",
      img: "https://source.unsplash.com/random"
    }
  ]
};

const Post = () => {
  return (
    <Card>
      <div>
        {dummyPost.isLoggedIn && (
          <Form style={{ marginBottom: "20px" }} encType="multipart/form-data">
            <Input.TextArea
              maxLength={140}
              placeholder="무슨 생각을 하고 계신가요?"
            />
            <div>
              <input type="file" multiple hidden />
              <Button>이미지 업로드</Button>
              <Button
                type="primary"
                style={{ float: "right" }}
                htmlType="submit"
              >
                짹짹
              </Button>
            </div>
            <div>
              {dummyPost.imagePaths.map((v, i) => {
                return(
                  <div key={v} style={{ display: "inline-block" }}>
                    <img
                      src={"http://localhost:3000" + v}
                      style={{ width: "200px" }}
                      all={v}
                    />
                    <div>
                      <Button>제거</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Form>
        )}
        {dummyPost.mainPosts.map(c => {
          return (
            <Card
              key={+c.createdAt}
              cover={c.img && <img alt="example" src={c.img} />}
              actions={[
                <Icon type="retweet" key="retweet" />,
                <Icon type="heart" key="heart" />,
                <Icon type="message" key="message" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
              extra={<Button>팔로우</Button>}
            >
              <Card.Meta
                avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                title={c.User.nickname}
                description={c.content}
              />
            </Card>
          );
        })}
      </div>
    </Card>
  );
};

export default withRouter(Post);
