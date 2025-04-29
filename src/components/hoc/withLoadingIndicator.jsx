import { Loader2 } from "lucide-react";

const withLoadingIndicator = (WrappedComponent) => {
  return function WithLoadingWrapper(props) {
    const { loading = false } = props;

    return loading ? (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading...</span>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withLoadingIndicator;
