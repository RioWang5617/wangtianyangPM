import subprocess
import sys
import os

def start_dev_server():
    print("正在启动 Vite 开发服务器...")
    try:
        # 使用 subprocess.run 执行 npm run dev
        # shell=True 允许在 Windows 上执行 npm 命令
        process = subprocess.Popen(
            ["npm", "run", "dev"],
            shell=True if os.name == 'nt' else False,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1
        )

        # 实时打印输出
        for line in process.stdout:
            print(line, end="")

        # 等待进程结束
        process.wait()

        if process.returncode != 0:
            print(f"服务器异常退出，状态码: {process.returncode}")

    except KeyboardInterrupt:
        print("\n正在停止服务器...")
        process.terminate()
        process.wait()
        print("服务器已停止。")
    except Exception as e:
        print(f"启动失败: {e}")

if __name__ == "__main__":
    start_dev_server()