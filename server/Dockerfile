FROM golang:1.15 as builder

ENV GO111MODULE=on \
    GOPROXY=https://goproxy.cn,direct

WORKDIR $GOPATH/src/DockerTest

# 将当前目录同步到docker工作目录下
COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .


#FROM scratch
FROM alpine

ENV GIN_MOD=release

WORKDIR /DockerTest

COPY --from=builder /go/src/DockerTest/main .

EXPOSE 8888:8888

ENTRYPOINT ["./main"]
