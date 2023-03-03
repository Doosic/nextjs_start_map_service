# Image

1. next 에서 제공하는 Image 태그를 사용하는 것이 좋다
2. lazy Loading 과 같은 설정이 자동으로 입혀진다

## Static Import

파일을 static하게 import 할 시에 next는 빌드 타임에 이미 해당 이미지의 정보를 가지고
미리 최적화 작업을 해둔다.

## 외부 이미지 사용 (공식문서에 나와있다. https://nextjs.org/docs/api-reference/next/image#domains)

외부 이미지 사용시에는 next는 미리 최적화가 불가능하다.
때문에 width, height 값을 필수로 입력받아 정적으로 이미지를 제공해준다.

- (주의) 보안을 위해 next는 허용된 도메인만 접근을 가능케 한다.
  2가지 방법이있는데 도메인을 설정해주는 방법이 있고 패턴을 이용해 해당 패턴의 주소를
  모두 허용하는 방법이있다 아래는 도메인을 이용한 방법이고 패턴을 이용한 방법은 문서를 참조하자.

  외부 이미지는 next.config (images:{domains:['']}) 설정이 필요하다.

  const nextConfig = { experimental: { appDir: true },
  images: {domains: ['lecture-1.vercel.app'],},};

- 외부 링크 사용시 width, height를 알 수 없는 경우 fill 이라는 속성을 사용한다.
  해당 이미지의 size는 부모요소의 크기에 의해 결정되게 한다. 그러므로 부모 요소의 크기 설정을
  주어야 한다.
