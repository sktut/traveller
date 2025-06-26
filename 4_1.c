// 4.1 Merge Sort Program
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

#define MAX 500
long comparisons = 0;

// Merge function
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        comparisons++;
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
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

// Menu and main
int main() {
    int arr[MAX], n, choice;
    char inputFile[20], outputFile[20];

    printf("\nMAIN MENU (MERGE SORT)\n");
    printf("1. Ascending Data\n2. Descending Data\n3. Random Data\n4. ERROR (EXIT)\n");
    printf("Enter option: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            strcpy(inputFile, "inAsce.dat");
            strcpy(outputFile, "outMergeAsce.dat");
            break;
        case 2:
            strcpy(inputFile, "inDesc.dat");
            strcpy(outputFile, "outMergeDesc.dat");
            break;
        case 3:
            strcpy(inputFile, "inRand.dat");
            strcpy(outputFile, "outMergeRand.dat");
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
    clock_t start = clock();
    mergeSort(arr, 0, n - 1);
    clock_t end = clock();

    long timeTaken = (long)((double)(end - start) * 1000000000 / CLOCKS_PER_SEC);

    printf("\nAfter Sorting:\n");
    display(arr, n);

    writeFile(outputFile, arr, n);
    printf("Number of Comparisons: %ld\n", comparisons);
    printf("Execution Time: %ld nanoseconds\n", timeTaken);

    return 0;
}
