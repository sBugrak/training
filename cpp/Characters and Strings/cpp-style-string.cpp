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

    // cout << s1.substr(3, 2) << endl;

    s1.erase(0, 1);
    // cout << s1 << endl;

    // string first_name{"Bugra"};
    // string last_name{"Karabulut"};
    // string full_name{first_name + " " +last_name};

    // cout << full_name << endl;

    //          for loop
    // cout << "\nLooping" << "\n------------------------------" << endl;

    // s1 = "Apple";
    // for (size_t i{0}; i < s1.length(); i++){cout << s1.at(i) << " ";}
    // cout << endl;

    //          substring
    // cout << "\nSubstring" << "\n-------------------------" << endl;
    // s1 = "This is a test";
    // cout << s1.substr(0,4) << endl;
    // cout << s1.substr(5,2) << endl;
    // cout << s1.substr(10,4) << endl;

    //          erase
    // cout << "\nErase" << "\n------------------------------" << endl;
    // s1 = "This is a test";
    // s1.erase(0,5); // Erases "this" from the string
    // cout << "s1 is now: " << s1 << endl; // is a test

    //          getline
    // cout << "\nGetline" << "\n-----------------------" << endl;
    // string full_name{};
    // cout << "Enter your full name: ";
    // getline(cin, full_name);

    // cout << "Your full name is: " << full_name << endl;

    //          find
    s1 = "The secret wor is Boo";
    string word{};

    cout << "Enter the word to fing: ";
    cin >> word;

    size_t position = s1.find(word);
    if (position != string::npos) {cout << "Found " << word << " at position: "<< position << endl;}
    else {cout << "Sorry, " << word << " not found" << endl;}

}
