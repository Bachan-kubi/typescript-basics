"use strict";
{
    // static is a premium props of class, you have to call parent class to use its purposes
    class Counter {
        static increase() {
            return Counter.counter + 1;
        }
        static decrease() {
            return Counter.counter - 1;
        }
    }
    Counter.counter = 0;
    const ins = new Counter();
    const ins1 = new Counter();
    console.log(Counter.decrease());
    console.log(Counter.increase());
}
