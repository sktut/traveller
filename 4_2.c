// 4.2 Quick Sort Program
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

#define MAX 500
long comparisons = 0;
int isWorstCase = 0;

// Quick Sort functions
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    int leftCount = 0, rightCount = 0;

    for (int j = low; j < high; j++) {
        comparisons++;
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }

    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;

    leftCount = i - low + 1;
    rightCount = high - (i + 1);

    if (leftCount == 0 || rightCount == 0)
        isWorstCase = 1;

    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Utility functions
int readFile(const char *filename, int arr[]) {
    FILE *fp = fopen(filename, "r");
    int i = 0;
    if (!fp) {
        printf("Error: Cannot open file %s\n", filename);
        return -1;
    }
    while (fscanf(fp, "%d", &arr[i]) != EOF && i < MAX) i++;
    fclose(fp);
    return i;
}

void writeFile(const char *filename, int arr[], int n) {
    FILE *fp = fopen(filename, "w");
    for (int i = 0; i < n; i++) fprintf(fp, "%d ", arr[i]);
    fclose(fp);
}

void display(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");
}

// Main and menu
int main() {
    int arr[MAX], n, choice;
    char inputFile[20], outputFile[20];

    printf("\nMAIN MENU (QUICK SORT)\n");
    printf("1. Ascending Data\n2. Descending Data\n3. Random Data\n4. ERROR (EXIT)\n");
    printf("Enter option: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            strcpy(inputFile, "inAsce.dat");
            strcpy(outputFile, "outQuickAsce.dat");
            break;
        case 2:
            strcpy(inputFile, "inDesc.dat");
            strcpy(outputFile, "outQuickDesc.dat");
            break;
        case 3:
            strcpy(inputFile, "inRand.dat");
            strcpy(outputFile, "outQuickRand.dat");
            break;
        default:
            printf("Exiting program.\n");
            return 0;
    }

    n = readFile(inputFile, arr);
    if (n <= 0) return 1;

    printf("\nBefore Sorting:\n");
    display(arr, n);

    comparisons = 0;
    isWorstCase = 0;
    clock_t start = clock();
    quickSort(arr, 0, n - 1);
    clock_t end = clock();

    long timeTaken = (long)((double)(end - start) * 1000000000 / CLOCKS_PER_SEC);

    printf("\nAfter Sorting:\n");
    display(arr, n);

    writeFile(outputFile, arr, n);
    printf("Number of Comparisons: %ld\n", comparisons);
    printf("Execution Time: %ld nanoseconds\n", timeTaken);
    printf("Scenario: %s-case\n", isWorstCase ? "Worst" : "Best");

    return 0;
}
