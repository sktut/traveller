#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

typedef struct {
    int adj[MAX][MAX];
    int n;
} Graph;

int visited_f[MAX], visited_b[MAX], parent_f[MAX], parent_b[MAX];

int is_meeting_point(int *meeting, int size) {
    for (int i = 0; i < size; i++)
        if (visited_f[i] && visited_b[i]) {
            *meeting = i;
            return 1;
        }
    return 0;
}

void print_path(int start, int end, int meeting) {
    int path1[MAX], path2[MAX];
    int i = 0, j = 0;
    while (meeting != -1) {
        path1[i++] = meeting;
        meeting = parent_f[meeting];
    }
    while (end != -1) {
        path2[j++] = end;
        end = parent_b[end];
    }

    for (int k = i - 1; k >= 0; k--)
        printf("%d ", path1[k]);
    for (int k = 1; k < j; k++)
        printf("%d ", path2[k]);
    printf("\n");
}

void bi_bfs(Graph *g, int start, int end) {
    int queue_f[MAX], front_f = 0, rear_f = 0;
    int queue_b[MAX], front_b = 0, rear_b = 0;

    memset(visited_f, 0, sizeof(visited_f));
    memset(visited_b, 0, sizeof(visited_b));
    memset(parent_f, -1, sizeof(parent_f));
    memset(parent_b, -1, sizeof(parent_b));

    visited_f[start] = 1;
    visited_b[end] = 1;

    queue_f[rear_f++] = start;
    queue_b[rear_b++] = end;

    while (front_f < rear_f && front_b < rear_b) {
        int size_f = rear_f - front_f;
        for (int i = 0; i < size_f; i++) {
            int u = queue_f[front_f++];
            for (int v = 0; v < g->n; v++) {
                if (g->adj[u][v] && !visited_f[v]) {
                    visited_f[v] = 1;
                    parent_f[v] = u;
                    queue_f[rear_f++] = v;
                    int meeting;
                    if (is_meeting_point(&meeting, g->n)) {
                        printf("\nBi-directional BFS Path: ");
                        print_path(start, end, meeting);
                        return;
                    }
                }
            }
        }

        int size_b = rear_b - front_b;
        for (int i = 0; i < size_b; i++) {
            int u = queue_b[front_b++];
            for (int v = 0; v < g->n; v++) {
                if (g->adj[u][v] && !visited_b[v]) {
                    visited_b[v] = 1;
                    parent_b[v] = u;
                    queue_b[rear_b++] = v;
                    int meeting;
                    if (is_meeting_point(&meeting, g->n)) {
                        printf("\nBi-directional BFS Path: ");
                        print_path(start, end, meeting);
                        return;
                    }
                }
            }
        }
    }

    printf("No path found.\n");
}

void standard_bfs(Graph *g, int start, int end) {
    int queue[MAX], front = 0, rear = 0, visited[MAX] = {0}, parent[MAX];
    memset(parent, -1, sizeof(parent));

    visited[start] = 1;
    queue[rear++] = start;

    while (front < rear) {
        int u = queue[front++];
        if (u == end)
            break;
        for (int v = 0; v < g->n; v++) {
            if (g->adj[u][v] && !visited[v]) {
                visited[v] = 1;
                parent[v] = u;
                queue[rear++] = v;
            }
        }
    }

    printf("\nStandard BFS Path: ");
    int path[MAX], i = 0;
    while (end != -1) {
        path[i++] = end;
        end = parent[end];
    }
    for (int j = i - 1; j >= 0; j--)
        printf("%d ", path[j]);
    printf("\n");
}

int dfs_util(Graph *g, int u, int end, int *visited, int *parent) {
    visited[u] = 1;
    if (u == end)
        return 1;
    for (int v = 0; v < g->n; v++) {
        if (g->adj[u][v] && !visited[v]) {
            parent[v] = u;
            if (dfs_util(g, v, end, visited, parent))
                return 1;
        }
    }
    return 0;
}

void standard_dfs(Graph *g, int start, int end) {
    int visited[MAX] = {0}, parent[MAX];
    memset(parent, -1, sizeof(parent));

    dfs_util(g, start, end, visited, parent);

    printf("\nStandard DFS Path: ");
    int path[MAX], i = 0;
    while (end != -1) {
        path[i++] = end;
        end = parent[end];
    }
    for (int j = i - 1; j >= 0; j--)
        printf("%d ", path[j]);
    printf("\n");
}

int main() {
    Graph g;
    g.n = 8;
    memset(g.adj, 0, sizeof(g.adj));

    g.adj[0][1] = g.adj[1][0] = 1;
    g.adj[0][3] = g.adj[3][0] = 1;
    g.adj[1][2] = g.adj[2][1] = 1;
    g.adj[3][4] = g.adj[4][3] = 1;
    g.adj[4][5] = g.adj[5][4] = 1;
    g.adj[5][6] = g.adj[6][5] = 1;
    g.adj[6][7] = g.adj[7][6] = 1;
    g.adj[2][7] = g.adj[7][2] = 1;

    int start = 0, end = 7;

    bi_bfs(&g, start, end);
    standard_bfs(&g, start, end);
    standard_dfs(&g, start, end);

    return 0;
}
