import { createEffect, createSignal, onCleanup } from "solid-js";
import lottie from "lottie-web";

interface LottieProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = (props: LottieProps) => {
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement | null>(
    null
  );

  createEffect(() => {
    const container = containerRef();
    if (!container) return;

    const { animationData, loop = true, autoplay = true } = props;

    const anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });

    onCleanup(() => {
      anim.destroy();
    });
  });

  return <div ref={setContainerRef}></div>;
};

export default LottieAnimation;
