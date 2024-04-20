const foo = () => {
    console.log('Hey');
    bar();
 }
 
 const bar = () => {
    console.log('Hello');
    setTimeout(() => {
        console.log('I am executed at last!');
    }, 2000);
    baz();
 }
 
 const baz = () => {
    console.log('Hi');
 }
 
 foo();

// Memory heap: It is a data structure that contains the memory allocated to all the variables and functions used in a program.

// Execution/call stack: It is a data structure that tells where you are in the program.

// Web APIs container: It contains all the long-running tasks such as event listeners, HTTP/AJAX requests and HTML Timer APIs. Each long-running task must ideally have a callback associated with it, which must be invoked after completing the long-running task. When an event is triggered or the long-running task finishes its execution, the associated callback is sent to the callback queue.

// Callback queue: The callback queue stores all the callback functions in the order they are added. It follows the traditional approach of ‘FIFO’ (First-In-First-Out). The first callback added to the queue is the first one that will be executed. When the execution (or call) stack is empty, the callback is sent to the stack to be executed.

// Event loop: This loop constantly monitors the execution (or call) stack and the callback queue. If the callback queue contains code to be executed but the stack is not empty, the event loop waits for the stack to get empty. Whenever it finds the execution stack empty (and the callback queue contains a callback method), it sends the callback at the beginning of the queue to the top of the stack. When a callback is pushed to the stack, it is then executed. In another scenario, when both the execution stack and the queue are empty, the event loop waits for some callback to be added to the callback queue.
