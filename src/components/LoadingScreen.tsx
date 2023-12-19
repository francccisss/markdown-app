import SplashScreenLayout from "./SplashScreenLayout";

const LoadingScreen = () => {
  return (
    <SplashScreenLayout>
      <span id="loading-spinner" className="loading-spinner"></span>
    </SplashScreenLayout>
  );
};
export default LoadingScreen;
