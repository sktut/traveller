#include <stdio.h>
#include <stdlib.h>

#define ROW 5
#define COL 5

typedef struct {
    int x, y;
} Point;

typedef struct {
    Point point;
    Point parent;
} Node;

int maze[ROW][COL] = {
    {1, 0, 1, 1, 1},
    {1, 0, 1, 0, 1},
    {1, 1, 1, 0, 1},
    {0, 0, 1, 1, 1},
    {1, 1, 1, 0, 1}
};

int visited_bfs[ROW][COL], visited_dfs[ROW][COL];
int nodes_explored_bfs = 0, nodes_explored_dfs = 0;

int is_valid(int x, int y, int visited[ROW][COL]) {
    return (x >= 0 && x < ROW && y >= 0 && y < COL &&
            maze[x][y] == 1 && visited[x][y] == 0);
}

int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

void bfs(Point start, Point end) {
    Node queue[ROW * COL];
    int front = 0, rear = 0;

    Point parent_map[ROW][COL];
    visited_bfs[start.x][start.y] = 1;
    queue[rear++] = (Node){start, start};

    while (front < rear) {
        Node current = queue[front++];
        nodes_explored_bfs++;

        if (current.point.x == end.x && current.point.y == end.y) {
            printf("\nBFS Path (Shortest): ");
            Point path[ROW * COL];
            int path_len = 0;
            Point temp = current.point;

            while (!(temp.x == start.x && temp.y == start.y)) {
                path[path_len++] = temp;
                temp = parent_map[temp.x][temp.y];
            }
            path[path_len++] = start;
            for (int i = path_len - 1; i >= 0; i--)
                printf("(%d,%d) ", path[i].x, path[i].y);
            return;
        }

        for (int i = 0; i < 4; i++) {
            int nx = current.point.x + dx[i];
            int ny = current.point.y + dy[i];

            if (is_valid(nx, ny, visited_bfs)) {
                visited_bfs[nx][ny] = 1;
                queue[rear++] = (Node){{nx, ny}, current.point};
                parent_map[nx][ny] = current.point;
            }
        }
    }
    printf("No path found with BFS\n");
}

int dfs_util(Point current, Point end, Point path[], int *index) {
    visited_dfs[current.x][current.y] = 1;
    path[(*index)++] = current;
    nodes_explored_dfs++;

    if (current.x == end.x && current.y == end.y)
        return 1;

    for (int i = 0; i < 4; i++) {
        int nx = current.x + dx[i];
        int ny = current.y + dy[i];

        if (is_valid(nx, ny, visited_dfs)) {
            if (dfs_util((Point){nx, ny}, end, path, index))
                return 1;
        }
    }

    (*index)--;
    return 0;
}

void dfs(Point start, Point end) {
    Point path[ROW * COL];
    int index = 0;

    if (dfs_util(start, end, path, &index)) {
        printf("\nDFS Path (Any Valid Path): ");
        for (int i = 0; i < index; i++)
            printf("(%d,%d) ", path[i].x, path[i].y);
    } else {
        printf("No path found with DFS\n");
    }
}

int main() {
    Point start = {0, 0};
    Point end = {4, 4};

    printf("Maze:\n");
    for (int i = 0; i < ROW; i++) {
        for (int j = 0; j < COL; j++)
            printf("%d ", maze[i][j]);
        printf("\n");
    }

    bfs(start, end);
    dfs(start, end);

    printf("\n\nNodes Explored:\n");
    printf("BFS: %d\n", nodes_explored_bfs);
    printf("DFS: %d\n", nodes_explored_dfs);

    return 0;
}
