#include <iostream>
#include <string>

using namespace std;

int main()
{
    // string s1;             // Empty
    // string s2{"Bugra"};    // Bugra
    // string s3{s2};         // Bugra
    // string s4{"Bugra", 3}; // Bug
    // string s5{s3, 0, 2};   // Bu
    // string s6(3, 'X');     // XXX

    // string s7;
    // s7 = "C++ Rocks!";

    // string s8{"Hello"};
    // s8 = s7;

    // string part1{"C++"};
    // string part2{"is a powerful"};

    // string sentence;

    // sentence = part1 + " " + part2 + " language."; // C++ is a powerful language
    // // sentence = "C++" + " is powerful" ------> is illegal.

    // // Substring - substr()
    // // object.substr(start_index, length)

    // string test_string = "This is a test.";

    // cout << test_string.substr(0, 4) << endl;  // This
    // cout << test_string.substr(5, 2) << endl;  // is
    // cout << test_string.substr(10, 4) << endl; // test

    string s0;
    string s1{"Apple"};
    string s2{"Banana"};
    string s3{"Kiwi"};
    string s4{"apple"};
    string s5{s1};       // Apple
    string s6{s1, 0, 3}; // App
    string s7(10, 'X');  // XXXXXXXXXX

    cout << s1.substr(3, 2) << endl;

    s1.erase(0, 1);

    cout << s1 << endl;
}