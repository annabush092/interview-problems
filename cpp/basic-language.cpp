// Just a file to refresh the basics of C++

// To run, in the terminal type:
// make cpp/basic-language   //this compiles all the changes you've made since the last compile
// ./cpp/basic-language   //runs the compiled file

#include <iostream>
#include <string> //include the string class so we can use string datatype.

// Function prototypes oh yeah
std::string getFirstNameFromUser();
std::string getFullNameFromUser();
void sayHiToName(std::string);

int main() {

  std::cout << "Hello from main! \n";

  std::string name = getFirstNameFromUser();
  sayHiToName(name);

  name = getFullNameFromUser();
  sayHiToName(name);

  std::cout << "Goodbye from main!\n";
  return 0;
}

// function to test standard cin functionality and returning a string
std::string getFirstNameFromUser() {
  std::string name;

  std::cout << "Hello, I am Computer. I don't think we have met before...\nWhat is your first name?\n";
  std::cin >> name;  //this will stop reading when it reads whitespace

  return name;
}

// function to test getline functionality, as well as cin.ignore, and returning a string
std::string getFullNameFromUser() {
  std::string name;
  std::cin.ignore(10, '\n'); //clear the keyboard buffer of any old, unwanted null characters

  std::cout << "Hello, I am Old Man Computer. I don't think we have met before...\nWhat is your full name?\n";
  getline(std::cin, name);  //this will read until it reaches an endl (until user presses return)

  return name;
}

// function to test passing arguments- default is pass by value
void sayHiToName(std::string name) {
  std::cout << "Hello, " << name << std::endl;
  return;
}
