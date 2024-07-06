import { useCallback, useRef } from "react";

type ObjModel = any;

export function useGetLatest(obj?: ObjModel) {
  const ref = useRef<ObjModel>();
  ref.current = obj;

  return useCallback(() => ref.current, []);
}

export function useAsyncDebounce(defaultFn: any, defaultWait = 0) {
  const debounceRef = useRef<ObjModel>({});

  const getDefaultFn = useGetLatest(defaultFn);
  const getDefaultWait = useGetLatest(defaultWait);

  return useCallback(
    async (...args: any) => {
      if (!debounceRef.current.promise) {
        debounceRef.current.promise = new Promise((resolve, reject) => {
          debounceRef.current.resolve = resolve;
          debounceRef.current.reject = reject;
        });
      }

      if (debounceRef.current.timeout) {
        clearTimeout(debounceRef.current.timeout);
      }

      debounceRef.current.timeout = setTimeout(async () => {
        delete debounceRef.current.timeout;
        try {
          debounceRef.current.resolve(await getDefaultFn()(...args));
        } catch (err) {
          debounceRef.current.reject(err);
        } finally {
          delete debounceRef.current.promise;
        }
      }, getDefaultWait());

      return debounceRef.current.promise;
    },
    [getDefaultFn, getDefaultWait]
  );
}
