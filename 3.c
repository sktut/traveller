#include <stdio.h>
#include <stdlib.h>

#define ROW 5
#define COL 5

typedef struct {
    int x, y, heuristic;
} Node;

typedef struct {
    Node data[ROW * COL];
    int size;
} PriorityQueue;

int grid[ROW][COL] = {
    {1, 1, 1, 1, 1},
    {0, 0, 1, 0, 1},
    {1, 1, 1, 0, 1},
    {1, 0, 0, 0, 1},
    {1, 1, 1, 1, 1}
};

int visited[ROW][COL];

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

void push(PriorityQueue *pq, Node n) {
    int i = pq->size++;
    while (i > 0 && pq->data[(i - 1) / 2].heuristic > n.heuristic) {
        pq->data[i] = pq->data[(i - 1) / 2];
        i = (i - 1) / 2;
    }
    pq->data[i] = n;
}

Node pop(PriorityQueue *pq) {
    Node min = pq->data[0];
    Node last = pq->data[--pq->size];
    int i = 0;
    while (2 * i + 1 < pq->size) {
        int child = 2 * i + 1;
        if (child + 1 < pq->size && pq->data[child + 1].heuristic < pq->data[child].heuristic)
            child++;
        if (last.heuristic <= pq->data[child].heuristic)
            break;
        pq->data[i] = pq->data[child];
        i = child;
    }
    pq->data[i] = last;
    return min;
}

int is_valid(int x, int y) {
    return x >= 0 && x < ROW && y >= 0 && y < COL && grid[x][y] == 1 && !visited[x][y];
}

int manhattan(int x1, int y1, int x2, int y2) {
    return abs(x1 - x2) + abs(y1 - y2);
}

void best_first_search(int sx, int sy, int tx, int ty) {
    PriorityQueue pq;
    pq.size = 0;
    Node start = {sx, sy, manhattan(sx, sy, tx, ty)};
    push(&pq, start);
    visited[sx][sy] = 1;

    while (pq.size > 0) {
        Node current = pop(&pq);
        printf("(%d,%d) ", current.x, current.y);
        if (current.x == tx && current.y == ty)
            return;

        for (int i = 0; i < 4; i++) {
            int nx = current.x + dx[i];
            int ny = current.y + dy[i];
            if (is_valid(nx, ny)) {
                visited[nx][ny] = 1;
                Node next = {nx, ny, manhattan(nx, ny, tx, ty)};
                push(&pq, next);
            }
        }
    }
    printf("Treasure not reachable.\n");
}

int main() {
    int start_x = 0, start_y = 0;
    int treasure_x = 4, treasure_y = 4;

    printf("Best-First Search Path: ");
    best_first_search(start_x, start_y, treasure_x, treasure_y);
    printf("\n");

    return 0;
}
