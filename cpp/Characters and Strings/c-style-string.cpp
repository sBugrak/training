// Implemented as an array of characters, thus can be accessed by array subscript syntax.
// "null" is the terminator.

#include <iostream>
#include <cstring>
#include <cctype>

using namespace std;

int main()
{
    char first_name[20]{};
    char last_name[20]{};
    char full_name[50]{};
    char temp[50]{};

    // cout << first_name << endl;

    // cout << "Please enter your first name: ";
    // cin >> first_name;

    // cout << "Please enter your last name: ";
    // cin >> last_name;

    // cout << "------------------------------" << endl;

    // cout << "Hello, " << first_name << ". Your first name has " << strlen(first_name) << " characters." << endl;
    // cout << "and your last name, " << last_name << " has " << strlen(last_name) << " characters." << endl;

    // strcpy(full_name, first_name); // copy first_name to full_name
    // strcat(full_name, " ");        // add a space to the full name
    // strcat(full_name, last_name);  // concatenate last_name to full_name
    // cout << "Your full name is " << full_name << endl;

    cout << "Enter your full name: ";
    cin.getline(full_name, 50);
    // cout << "Your full name is " << full_name << " and it contains " << strlen(full_name) << " characters." << endl;

    // strcpy(temp, full_name);
    // if (strcmp(temp, full_name) == 0)
    //     cout << temp << " and " << full_name << " are the same." << endl;

    for (size_t i = 0; i < strlen(full_name); ++i)
    {
        full_name[i] = toupper(full_name[i]);
    }
    cout << full_name << endl;
}