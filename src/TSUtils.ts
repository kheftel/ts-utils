export class TSUtils {
    public static multiAttempt(testFunc: Function, onComplete: Function, numAttempts: number, interval = 50, debug = false) {
        console.log(`${numAttempts} left`);

        if (numAttempts <= 0) {
            if (debug) console.log('all attempts failed');
            return;
        }

        if (testFunc()) {
            if (debug) console.log('attempt successful!');
            onComplete();
            return;
        } else {
            var timeout = setTimeout(function () {
                if (debug) console.log(`attempting again in ${interval} ms`);
                TSUtils.multiAttempt(testFunc, onComplete, numAttempts - 1, interval);
            }, interval);
        }
    }

    public static test() {
        console.log('testing...');
   }
}