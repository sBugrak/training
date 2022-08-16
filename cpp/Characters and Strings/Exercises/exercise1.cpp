#include <iostream>
#include <cstring>
#include <cctype>

using namespace std;

int main()
{
    char first_name[10] = "Bjarne";
    char last_name[15] = "Stroustrup";
    char whole_name[30];

    size_t first_name_length = strlen(first_name);
    size_t last_name_length = strlen(last_name);
    strcpy(whole_name, first_name);
    strcat(whole_name, last_name);
    size_t whole_name_lenght = strlen(whole_name);
}